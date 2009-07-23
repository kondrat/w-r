UndoManager = function()
{
    /// <summary>
    /// Undo manager object that provides basic undo functionality. It does not handle recursive relationships (or back references)
    /// between objects nor does it store function pointers.
    /// </summary>
    
    //The stack of changes that contain the object references and their old state
    this._undoStack = [];
}

UndoManager.prototype =
{
    saveUndoPoint: function(undoObject)
    {
        /// <summary>
        /// Saves object to the undo stack
        /// </summary>
        
        this._undoStack.push(new UndoItem(undoObject));
    },
    
    undo: function()
    {
        /// <summary>
        /// Undoes the last object put on to the undo stack
        /// </summary>
        var undoItem = this._undoStack.pop();
        
        if (undoItem != null)
        {
            undoItem.undo();
        }
    },
    
    clear: function()
    {
        /// <summary>
        /// Clears the undo stack
        /// </summary>
        this._undoStack = [];
    }
}

UndoItem = function(undoObject)
{
    this._objectReference = undoObject;
    this._undoState = {};
    this._type = '';
    
    this._storeState = function(targetObject)
    {
        /// <summary>
        /// A function to store the object attributes. It may create other undo objects for child attribute objects.
        /// </summary>
        
        var targetObjectType = this._getObjectType(targetObject);
        this._type = targetObjectType;
        
        switch (targetObjectType)
        {
            case 'object':
                this._storeObjectAttributes(targetObject);
                break;
            
            case 'date':
                this._undoState = targetObject.valueOf();
                break;
            
            case 'array':
                this._storeArrayItems(targetObject);
                break;
                
            default:
                throw new Error("Unsupported object type being passed to _storeState: " + targetObject);
        }
    }
    
    this._storeObjectAttributes = function(targetObject)
    {
        /// <summary>
        /// Stores the attributes of the object in the state object
        /// </summary>
        
        for (var attributeName in targetObject)
        {
            var attribute = targetObject[attributeName];
            var attributeType = this._getObjectType(attribute);
            
            switch (attributeType)
            {
                case 'object':
                case 'array':
                case 'date':
                    this._undoState[attributeName] = new UndoItem(attribute);
                    break;
                    
                //Functions are not preserved
                case 'function':
                    break;
                
                default:
                    this._undoState[attributeName] = attribute;
                    break;
            }
        }
    }
    
    this._storeArrayItems = function(targetObject)
    {
        /// <summary>
        /// Stores array item references in a duplicate array. If the items in the array are objects then they are stored
        /// in another UndoItem.
        /// </summary>
        
        this._undoState = [];
        
        for (var i = 0; i < targetObject.length; i++)
        {
            var arrayItem = targetObject[i];
            var attributeType = this._getObjectType(arrayItem);
            
            switch (attributeType)
            {
                case 'object':
                case 'array':
                    this._undoState.push(new UndoItem(arrayItem));
                    break;
                
                //Functions are not preserved
                case 'function':
                    break;
                    
                default:
                    this._undoState.push(arrayItem);
                    break;
            }
        }
    }
    
    this._restoreArrayState = function(targetArray)
    {
        /// <summary>
        /// Restores saved array items.
        /// </summary>
        
        //Clear out the targetArray
        for (var i = targetArray.length-1; i >= 0; i--)
        {
            targetArray.pop();
        }
        
        //Copy all the saved items back into the array
        for (var i = 0; i < this._undoState.length; i++)
        {
            var arrayItem = this._undoState[i];
            var itemType = this._getObjectType(arrayItem);
            
            switch (itemType)
            {
                case 'array':
                case 'object':
                    targetArray.push(arrayItem.undo());
                    break;
                
                default:
                    targetArray.push(arrayItem);
                    break
            }
        }
        
        return targetArray;
    }
    
    this._restoreObjectState = function(targetObject)
    {
        /// <summary>
        /// Restores saved object attributes.
        /// </summary>
        
        for (var attributeName in this._undoState)
        {
            var attribute = this._undoState[attributeName];
            var attributeType = this._getObjectType(attribute);
            
            switch (attributeType)
            {
                case 'object':
                    targetObject[attributeName] = this._undoState[attributeName].undo();
                    break;
                
                default:
                    targetObject[attributeName] = this._undoState[attributeName];
                    break
            }
        }
        
        return targetObject;
    }
    
    this._restoreDateState = function(targetObject)
    {
        /// <summary>
        /// Restores saved date object.
        /// </summary>
        
        targetObject.setTime(this._undoState);
        
        return targetObject;
    }
    
    this.undo = function()
    {
        /// <summary>
        /// Undoes the changes applied to this object and child objects.
        /// </summary>
        
        if (this._getObjectType(this._undoState) == 'array')
        {
            return this._restoreArrayState(undoObject);
        }
        else if (this._type != 'date')
        {
            return this._restoreObjectState(undoObject);
        }
        else
        {
            return this._restoreDateState(undoObject);
        }
    }
    
    this._getObjectType = function(targetObject)
    {
        /// <summary>
        /// Returns the object type using the constructor as well as the standard JavaScript typeof functionality to determine type
        /// </summary>
    
        var targetObjectType = typeof(targetObject);
        
        if (targetObject == null)
        {
            targetObjectType = "null";
        }
        
        switch (targetObjectType)
        {
            case 'object':
            
                if (targetObject.constructor == Array)
                {
                    return "array";
                }
                
                if (targetObject.constructor == Date)
                {
                    return "date";
                }
                
                return "object";
                
            case 'number':
            case 'string':
            case 'function':
            case 'boolean':
            case 'undefined':
            case 'null':
                return targetObjectType;
                
            default:
                return "unknown";
        }
    }
    
    if (undoObject == null)
    {
        throw new Error("Cannot undo the state of a null object");
    }
    
    this._storeState(undoObject);
}
