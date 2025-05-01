

function TaskDisplay({ task }) {
    if (!task) return null;
  
    return (
      <div className='text-center mt-4'>
        <p className='text-xl font-bold text-pink-600 text-[40px]'>
          {task}
        </p>
      </div>
    );
  }
  
  export default TaskDisplay;
  