import { SPFI, spfi } from "@pnp/sp";
import { SPFx } from "@pnp/sp";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { PnPLogging, LogLevel } from "@pnp/logging";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/batching";


let _sp: SPFI | null = null;

export const getSP = (context?: WebPartContext): SPFI => {
  if (_sp === null && context) {
    // Necesario instalar @pnp/logging para usar PnPLogging
    _sp = spfi()
      .using(SPFx(context))
      .using(PnPLogging(LogLevel.Warning)); // Puedes cambiar el nivel de logging a Verbose, Info, etc.
  }
  return _sp!;
};