import React from "react";

export class ErrorBoundary extends React.Component<any, any> {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error);
  }

  render() {
    return <>{this.props.children}</>;
  }
}
