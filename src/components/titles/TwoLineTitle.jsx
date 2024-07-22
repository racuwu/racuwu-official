const TwoLineTitle = (props) => {
    return (

        <div className='w-full flex flex-col pt-[60px] items-center text-center px-[10%]'>
            <span className='text-3xl font-bold text-[#D51067] uppercase'>{props.main}</span> 
            <div className="w-1/6 border-b-2 border-[#D51067] m-4"></div>
            <span className='text-xl text-[#737373] capitalize'>{props.sub}</span>     
        </div>
        );
    };
    
    export default TwoLineTitle