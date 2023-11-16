import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import SideNav from "src/components/layout/side-nav";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Helmet from "~/components/auth/Helmet";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div>
        <Helmet>
          <div>
            <SideNav />
            <div style={{ margin: "40px", marginTop: "120px" }}>
              <Component {...pageProps} />
            </div>
          </div>
        </Helmet>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
