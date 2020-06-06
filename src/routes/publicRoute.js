
const PublicRoute = ({props}) => {
    const {component, isAuthenticated, ...rest} = props
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Redirect
                        to={{
                            pathname: "/",
                        }}
                    />
                ) : (
                    React.createElement(component, props)
                )
            }
        />
    );
}