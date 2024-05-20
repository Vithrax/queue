import { type FC } from "react";

interface footerProps {}

const footer: FC<footerProps> = ({}) => {
  return (
    <footer className="h-24 border-t-2">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <p>© 2023 Queue labs inc.</p>
      </div>
    </footer>
  );
};

export default footer;
