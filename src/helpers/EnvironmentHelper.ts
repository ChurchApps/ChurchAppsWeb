import { ApiHelper, CommonEnvironmentHelper } from "@churchapps/apphelper";

export class EnvironmentHelper {
  private static MembershipApi = "";
  static AppUrl = "";
  static B1SubUrl = "";
  static SLSubUrl = "";
  static Common = CommonEnvironmentHelper;

  static init = () => {
    switch (process.env.REACT_APP_STAGE) {
      case "staging": EnvironmentHelper.initStaging(); break;
      case "prod": EnvironmentHelper.initProd(); break;
      default: EnvironmentHelper.initDev(); break;
    }
    ApiHelper.apiConfigs = [
      { keyName: "MembershipApi", url: EnvironmentHelper.MembershipApi, jwt: "", permisssions: [] }
    ];
  }

  static initDev = () => {
    EnvironmentHelper.B1SubUrl = process.env.REACT_APP_B1_SUB_URL || "";
    EnvironmentHelper.SLSubUrl = process.env.REACT_APP_SL_SUB_URL || "";
    EnvironmentHelper.MembershipApi = process.env.REACT_APP_MEMBERSHIP_API || "";
    EnvironmentHelper.AppUrl = process.env.REACT_APP_CHUMS_APP_URL || ""
  }

  //NOTE: None of these values are secret.
  static initStaging = () => {
    EnvironmentHelper.MembershipApi = "https://membershipapi.staging.churchapps.org";
    EnvironmentHelper.B1SubUrl = "https://{key}.staging.b1.church";
    EnvironmentHelper.SLSubUrl = "https://{key}.staging.streaminglive.church";
    EnvironmentHelper.AppUrl = "https://accounts.staging.churchapps.org"
  }

  //NOTE: None of these values are secret.
  static initProd = () => {
    EnvironmentHelper.MembershipApi = "https://membershipapi.churchapps.org";
    EnvironmentHelper.B1SubUrl = "https://{key}.b1.church";
    EnvironmentHelper.SLSubUrl = "https://{key}.streaminglive.church";
    EnvironmentHelper.AppUrl = "https://app.chums.org"
    EnvironmentHelper.Common.GoogleAnalyticsTag = this.getAnalyticsTag();
  }

  static getAnalyticsTag = () => {
    let result = "G-KQ02ER7SZ9";
    const host = window.location.hostname.toLocaleLowerCase();
    if (host.indexOf("chums.org") > -1) result = "G-64K0RGG73B"
    else if (host.indexOf("b1.church") > -1) result = "G-3RQGLEE47Y"
    else if (host.indexOf("streaminglive.church") > -1) result = "G-SP1TEJQC29";
    return result;
  }

}
