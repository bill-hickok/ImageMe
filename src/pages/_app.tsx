import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import SideNavigation from "~/components/layout/SideNavigation";
import { Provider } from 'react-redux';
import { store } from '~/store/store';

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Helmet from "~/components/auth/Helmet";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Helmet>
          <div>
            <SideNavigation />
            <div style={{ margin: "40px", marginTop: "120px" }}>
              <Component {...pageProps} />
            </div>
          </div>
        </Helmet>
      </Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
