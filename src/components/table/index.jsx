// styles
import './styles.css';

export default function Table({ props }) {
  const { data=null, show=null, selected, onClick } = props;
  const widths = {};

  (() => {
    if(data !== null) {
      // set widths using titles
      data.forEach((obj, dataIndex) => dataIndex === 0 && Object.keys(obj).forEach(prop => {
        widths[prop] = prop.length;
      }));

      // set widths using showData
      data.forEach(obj => Object.keys(obj).forEach(prop => {
        if(typeof(obj[prop]) !== 'object') {
          if(obj[prop].toString().length > widths[prop]) {
            widths[prop] = obj[prop].toString().length;
          }
        }
        else if(prop === 'address') {
          let length = 0;
          Object.keys(obj[prop]).forEach(subProp => length = length + obj[prop][subProp].length);
          if(length > widths[prop]) {
            widths[prop] = length;
          }
        }
      }));
    }
  })();
  
  const getWidth = (prop) => {
    return { width: widths[prop] * 12.5 };
  };

  return(
    <div className='atom-table'>
      { data !== null ? <div>
        <div className='row title'>
          {data.map((obj, dataIndex) => ((dataIndex === 0) && Object.keys(obj).map((prop, objIndex) => 
            (show !== null ? show.map(s => (prop === s) && <div key={objIndex+1} style={getWidth(prop)}>{prop}</div>) : 
            <div key={objIndex+1} style={getWidth(prop)}>{prop}</div>)
          )))}
        </div>

        {data.map((obj, dataIndex) => (<div key={dataIndex+1} className={`row ${selected && selected._id === obj._id ? 'selected' : ''}`} onClick={() => onClick(obj)}>
          {Object.keys(obj).map((prop, objIndex) => 
            (show !== null ? show.map(s => (prop === s) && 
              <div key={objIndex+1} style={getWidth(prop)}>{
                typeof(obj[prop]) !== 'object' ? obj[prop] :
                (prop === 'address') ? Object.keys(obj[prop]).map((subProp, subPropIndex) => `${obj[prop][subProp]}${subPropIndex < 2 ? ', ' : ''}`) :
                (prop === 'birthDate') && Object.keys(obj[prop]).map((subProp, subPropIndex) => `${obj[prop][subProp]}${subPropIndex < 2 ? ' - ' : ''}`)
              }</div>
            ) : 
              <div key={objIndex+1} style={getWidth(prop)}>{
                typeof(obj[prop]) !== 'object' ? obj[prop] :
                (prop === 'address') ? Object.keys(obj[prop]).map((subProp, subPropIndex) => `${obj[prop][subProp]}${subPropIndex < 2 ? ', ' : ''}`) :
                (prop === 'birthDate') && Object.keys(obj[prop]).map((subProp, subPropIndex) => `${obj[prop][subProp]}${subPropIndex < 2 ? ' - ' : ''}`)
              }</div>
            )
          )}
        </div>))}
      </div> : <div className='row empty'>
        Data Kosong
      </div> }
    </div>
  );
}
