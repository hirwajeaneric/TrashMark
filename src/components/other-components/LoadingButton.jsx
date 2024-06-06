/* eslint-disable react/prop-types */
// import {  } from '@loadingio/css-spinner'
import '../../styles/spinner.css';

const LoadingButton = ({size}) => {
    
    return (
        <button disabled type="button" className={`block w-${size ? size : 'full'} rounded-lg bg-slate-400 px-5 text-sm font-medium text-white`}>
            <div className="lds-dual-ring"></div>
        </button>
    )
}

export default LoadingButton