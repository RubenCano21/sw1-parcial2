

interface Widget {
  id: string;
  icon: React.ReactNode;
  title: string;
}

interface WidgetPaletteProps {
  widgets: Widget[];
  onDragStart: (widget: Widget) => void;
}

const WidgetPalette: React.FC<WidgetPaletteProps> = ({ widgets, onDragStart }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Widgets</h2>
      <div className="grid grid-cols-2 gap-3">
        {widgets.map(widget => (
          <div
            key={widget.id}
            draggable
            onDragStart={() => onDragStart(widget)}
            className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-move hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div className="flex items-center space-x-2 text-gray-900 dark:text-white">
              <div className="p-2 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                {widget.icon}
              </div>
              <span className="text-sm font-medium">{widget.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WidgetPalette;