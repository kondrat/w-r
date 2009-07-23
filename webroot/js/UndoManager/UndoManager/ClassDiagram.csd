<ClassProject>
  <Language>CSharp</Language>
  <Entities>
    <Entity type="Class">
      <Name>UndoItem</Name>
      <Access>Public</Access>
      <Member type="Field">private string _type</Member>
      <Member type="Field">private object _undoState</Member>
      <Member type="Field">private object _objectReference</Member>
      <Member type="Method">private void _storeState()</Member>
      <Member type="Method">private void _storeObjectAttributes()</Member>
      <Member type="Method">private void _storeArrayItems()</Member>
      <Member type="Method">private Array _restoreArrayState()</Member>
      <Member type="Method">private object _restoreObjectState()</Member>
      <Member type="Method">private Date _restoreDateState()</Member>
      <Member type="Method">private string _getObjectType()</Member>
      <Member type="Method">public void undo()</Member>
      <Member type="Constructor">public UndoItem()</Member>
      <Modifier>None</Modifier>
    </Entity>
    <Entity type="Class">
      <Name>UndoManager</Name>
      <Access>Public</Access>
      <Member type="Field">private UndoItem _undoStack</Member>
      <Member type="Method">public void saveUndoPoint()</Member>
      <Member type="Method">public void undo()</Member>
      <Member type="Method">public void clear()</Member>
      <Modifier>None</Modifier>
    </Entity>
  </Entities>
  <Relations>
    <Relation type="Association" first="1" second="0">
      <Direction>None</Direction>
      <IsAggregation>False</IsAggregation>
      <IsComposition>True</IsComposition>
    </Relation>
  </Relations>
  <Positions>
    <Shape>
      <Location left="445" top="72" />
      <Size width="199" height="277" />
    </Shape>
    <Shape>
      <Location left="204" top="113" />
      <Size width="162" height="141" />
    </Shape>
    <Connection>
      <StartNode isHorizontal="True" location="64" />
      <EndNode isHorizontal="True" location="105" />
    </Connection>
  </Positions>
</ClassProject>