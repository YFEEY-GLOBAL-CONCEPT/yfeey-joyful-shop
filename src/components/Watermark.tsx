
const Watermark = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
      <div className="text-[15vw] font-bold text-gray-200/20 dark:text-gray-800/20 select-none -rotate-12 whitespace-nowrap">
        YFEEY TEMPLATE
      </div>
    </div>
  );
};

export default Watermark;
