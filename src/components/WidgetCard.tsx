type WidgetCardProps = {
  title: string;
  icon: React.ReactNode;
  category: string;
};

const WidgetCard = ({ title, icon, category }: WidgetCardProps) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3">
        <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;