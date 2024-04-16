import React, { memo, useEffect } from "react";
import { useSelector } from "react-redux";

import { useForceSetState } from "../hooks/use-force-state";
import { currentModalSelector } from "../slice/modals-storage";
import { Modals } from "../slice/modals-types";

export const ModalsContainer = memo(() => {
  const { modals, props } = useSelector(currentModalSelector);
  const { keyForRerender, reloadComponent } = useForceSetState();
  const { keyForRerender: upload, reloadComponent: reloadUploads } = useForceSetState();

  useEffect(() => {
    reloadComponent();
    reloadUploads();
  }, [modals, props]);

  return (
    <>
      {modals.map((modal) => {
        switch (modal) {
          // case Modals.SubdivisionsDialog:
          //   return <SubdivisionDialog key={keyForRerender} {...props} />;
          default:
            return null;
        }
      })}
    </>
  );
});
