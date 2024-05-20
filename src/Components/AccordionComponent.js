
import { useState } from 'react';
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from 'react-icons/hi';

const AccordionComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div className='p-4 border-b border-gray-200'>
    <div className='flex justify-between cursor-pointer' onClick={toggleAccordion}>
        <p className='text-md font-semibold'>{props.question}</p>
        {isOpen ? (
          <HiOutlineMinusCircle className="text-gray-400 text-xl" />
        ) : (
          <HiOutlinePlusCircle className="text-gray-400 text-xl" />
        )}     
    </div>
    {isOpen && (<p className='text-sm text-gray-500 px-8 py-2'>{props.answer}</p>)}
    </div>
    
    </>
  )
}

export default AccordionComponent