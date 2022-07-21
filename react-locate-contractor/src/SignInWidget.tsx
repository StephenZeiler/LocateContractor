import { useRef } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import useAsyncEffect from "use-async-effect";

const SignInWidget = ({ config, onSuccess, onError }: { config: any, onSuccess: any; onError: any }) => {
    const widgetRef = useRef<HTMLDivElement>(null);
    const newConfig = config;


    useAsyncEffect(async () => {
        if (widgetRef && widgetRef.current && !widgetRef.current) {
            return false;
        }
        if (newConfig && newConfig.widget) {
            const widget: any = new OktaSignIn(newConfig.widget);
            // Search for URL Parameters to see if a user is being routed to the application to recover password
            var searchParams = new URL(window.location.href).searchParams;
            widget.otp = searchParams.get('otp');
            widget.state = searchParams.get('state');
            widget.showSignInToGetTokens({
                el: widgetRef.current,
            }).then(onSuccess).catch(onError);
            return () => widget.remove();
        }


    }, [onSuccess, onError]);

    return (<div ref={widgetRef} />);
};



export default SignInWidget;




