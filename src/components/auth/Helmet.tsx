import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Helmet = ({ children }: Props) => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated" && router.isReady) {
      // Use the void operator to explicitly ignore the returned promise
      void router.replace("/api/auth/signin");
    }
  }, [router, status]);

  if (status === "authenticated") {
    return <>{children}</>;
  }
  return <></>;
};

export default Helmet;
