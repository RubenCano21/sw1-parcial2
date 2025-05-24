
interface Widget {
  id: string | number;
  icon: React.ReactNode;
  title: string;
  category: string;
}

interface CanvasDropZoneProps {
  widgets: Widget[];
  onDrop: React.DragEventHandler<HTMLDivElement>;
  onDragOver: React.DragEventHandler<HTMLDivElement>;
}

const CanvasDropZone: React.FC<CanvasDropZoneProps> = ({ widgets, onDrop, onDragOver }) => {
  return (
    <div 
      className="h-full w-full p-4"
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {widgets.length === 0 ? (
        <div className="h-full flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl">
          <p className="text-gray-500 dark:text-gray-400">Arrastra widgets aquí</p>
        </div>
      ) : (
        <div className="space-y-3">
          {widgets.map((widget, index) => (
            <div 
              key={`${widget.id}-${index}`}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  {widget.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{widget.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{widget.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CanvasDropZone;