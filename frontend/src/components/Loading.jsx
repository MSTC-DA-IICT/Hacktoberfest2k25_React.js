/**
 * LOADING COMPONENT - Loading spinner/state
 *
 * HACKTOBERFEST TODO:
 * A reusable loading component for showing loading states.
 *
 * CONTRIBUTOR TASKS:
 * 1. Create a loading spinner with animation
 * 2. Make it customizable (size, color)
 * 3. Center it in the container
 * 4. Add optional loading text
 *
 * PROPS:
 * - size: 'sm' | 'md' | 'lg'
 * - text: Optional loading text
 * - fullScreen: Boolean to show full screen loader
 */

/**
 * TODO: IMPLEMENT LOADING COMPONENT
 *
 * Features:
 * - Spinning animation
 * - Different sizes
 * - Optional text
 * - Full screen or inline
 *
 * EXAMPLE:
 * <Loading size="lg" text="Loading questions..." fullScreen />
 */

const Loading = ({ size = 'md', text = '', fullScreen = false }) => {
  const sizes = {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  const spinnerSize = sizes[size] || sizes.md;

  const loader = (
    <div className="flex flex-col items-center justify-center">
      <div className={`animate-spin rounded-full border-b-2 border-primary-600 ${spinnerSize}`}></div>
      {text && <p className="mt-4 text-gray-600">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return <div className="flex items-center justify-center min-h-screen">{loader}</div>;
  }

  return loader;
};

export default Loading;
