/* eslint-disable react/prop-types */
const ResponseMessage = ({ type, content }) => {
    return (
        <div className='fixed z-50 top-4 right-4'>
            {type === 'success' && <p className="px-3 py-2 rounded-md text-green-700 bg-green-100 w-auto min-w-60">{content}</p>}
            {type === 'error' && <p className="px-3 py-2 rounded-md text-red-700 bg-red-100 w-auto min-w-60">{content}</p>}
        </div>
    );
}

export default ResponseMessage