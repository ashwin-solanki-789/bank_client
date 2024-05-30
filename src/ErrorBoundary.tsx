import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback: ReactNode | ((props: { error: string }) => ReactNode);
}

interface State {
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    console.log(error.message);
    return { error: error };
  }

  render() {
    const { children, fallback } = this.props;
    const { error } = this.state;

    if (error) {
      if (typeof fallback === "function") {
        return fallback({ error: error.message });
      }
      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;
