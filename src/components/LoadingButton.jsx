// import {  } from '@loadingio/css-spinner'
import '../styles/spinner.css';

const LoadingButton = () => {
    return (
        <button disabled type="button" className="block w-full rounded-lg bg-slate-400 px-5 text-sm font-medium text-white">
            <div className="lds-dual-ring"></div>
        </button>
    )
}

export default LoadingButton