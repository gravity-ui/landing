import React, {ReactNode} from 'react';

interface Props {
    children: ReactNode;
    onError?: (error: Error) => void;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
    static getDerivedStateFromError(error: Error): State {
        return {hasError: true, error};
    }

    constructor(props: Props) {
        super(props);
        this.state = {hasError: false, error: null};
    }

    componentDidCatch(error: Error) {
        this.props.onError?.(error);
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.children !== this.props.children && this.state.hasError) {
            this.setState({hasError: false, error: null});
        }
    }

    render() {
        return this.state.hasError && this.state.error ? (
            <div
                style={{
                    padding: '20px',
                    backgroundColor: '#3c1f1f',
                    borderLeft: '4px solid #8b0000',
                    color: '#ff6b6b',
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    height: '100%',
                    overflowY: 'auto',
                }}
            >
                <div style={{marginBottom: '8px'}}>{this.state.error.message}</div>
                {this.state.error.stack && (
                    <details open style={{marginTop: '12px'}}>
                        <summary
                            style={{cursor: 'pointer', userSelect: 'none', marginBottom: '8px'}}
                        >
                            Stack trace
                        </summary>
                        <pre
                            style={{
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-all',
                                fontSize: '11px',
                                backgroundColor: '#2a1515',
                                padding: '8px',
                                borderRadius: '4px',
                            }}
                        >
                            {this.state.error.stack}
                        </pre>
                    </details>
                )}
            </div>
        ) : (
            this.props.children
        );
    }
}
