import React, { PropsWithChildren } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import CartDialog from "./CartDialog";
const DialogWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Dialog>
      <DialogContent>
        <CartDialog />
      </DialogContent>
      {children}
    </Dialog>
  );
};

export default DialogWrapper;
