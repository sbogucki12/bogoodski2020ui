import React, { useState, useEffect } from 'react';
import './newRunLog.css';
import * as constants from '../../Utils/consts';
import MaterialTable from 'material-table';
import fetchData from '../../Utils/fetchData';
import CircularProgress from '@material-ui/core/CircularProgress';

const NewRunLogTable = () => {

    const [runData, setRunData] = useState(null);   
     
    useEffect(() => {
        fetchData(constants.APIRUNDATA_DEV)
        .then(response => setRunData(response))
        .catch(error => console.log(error))
    }, [])

    let view = <MaterialTable
        columns={[
        { title: 'Date', field: 'date' },
        { title: 'Duration', field: 'duration', type: 'numeric' },
        { title: 'Distance', field: 'distance', type: 'numeric' },
        { title: 'Run Type', field: 'comment'}
        ]}
        data={runData}
        title="Run Log"
    />;

    if(runData === null)
    {
        view = <CircularProgress />;
    }

    return (
        <div className="newRunLogTable-container">
            {view}
        </div>
    );
};

export default NewRunLogTable;