import React from "react";

interface ILoadingStateWrapperProps {
  isLoading: boolean;
  children: React.ReactNode;
  isDataEnable: boolean;
}

const LoadingStateWrapper: React.FC<ILoadingStateWrapperProps> = ({
  isLoading,
  children,
  isDataEnable,
}) => (
  <div>
    {!isDataEnable && !isLoading && <span>Not found data</span>}
    {isDataEnable && <>{children}</>}
  </div>
);

export default LoadingStateWrapper;
