import { ApiHelper } from "../appBase/helpers";

export class EnvironmentHelper {
  private static StreamingLiveApi = "";
  private static MembershipApi = "";
  static AppUrl = "";
  static GoogleAnalyticsTag = "";
  private static B1Api = "";
  static B1SubUrl = "";
  static SLSubUrl = "";

  static init = () => {
    switch (process.env.REACT_APP_STAGE) {
      case "staging": EnvironmentHelper.initStaging(); break;
      case "prod": EnvironmentHelper.initProd(); break;
      default: EnvironmentHelper.initDev(); break;
    }
    ApiHelper.apiConfigs = [
      { keyName: "StreamingLiveApi", url: EnvironmentHelper.StreamingLiveApi, jwt: "", permisssions: [] },
      { keyName: "B1Api", url: EnvironmentHelper.B1Api, jwt: "", permisssions: [] },
      { keyName: "MembershipApi", url: EnvironmentHelper.MembershipApi, jwt: "", permisssions: [] }
    ];
  }

  static initDev = () => {
    EnvironmentHelper.StreamingLiveApi = process.env.REACT_APP_STREAMINGLIVE_API || "";
    EnvironmentHelper.B1Api = process.env.REACT_APP_B1_API || "";
    EnvironmentHelper.B1SubUrl = process.env.REACT_APP_B1_SUB_URL || "";
    EnvironmentHelper.SLSubUrl = process.env.REACT_APP_SL_SUB_URL || "";
    EnvironmentHelper.MembershipApi = process.env.REACT_APP_MEMBERSHIP_API || "";
    EnvironmentHelper.GoogleAnalyticsTag = process.env.REACT_APP_GOOGLE_ANALYTICS || "";
    EnvironmentHelper.AppUrl = process.env.REACT_APP_CHUMS_APP_URL || ""
  }

  //NOTE: None of these values are secret.
  static initStaging = () => {
    EnvironmentHelper.StreamingLiveApi = "https://api.staging.streaminglive.church";
    EnvironmentHelper.B1Api = "https://api.staging.b1.church";
    EnvironmentHelper.MembershipApi = "https://membershipapi.staging.churchapps.org";
    EnvironmentHelper.B1SubUrl = "https://{key}.staging.b1.church";
    EnvironmentHelper.SLSubUrl = "https://{key}.staging.streaminglive.church";
    EnvironmentHelper.AppUrl = "https://accounts.staging.churchapps.org"
    EnvironmentHelper.GoogleAnalyticsTag = "";
  }

  //NOTE: None of these values are secret.
  static initProd = () => {
    EnvironmentHelper.StreamingLiveApi = "https://api.streaminglive.church";
    EnvironmentHelper.B1Api = "https://api.b1.church";
    EnvironmentHelper.MembershipApi = "https://membershipapi.churchapps.org";
    EnvironmentHelper.B1SubUrl = "https://{key}.b1.church";
    EnvironmentHelper.SLSubUrl = "https://{key}.streaminglive.church";
    EnvironmentHelper.AppUrl = "https://app.chums.org"
    EnvironmentHelper.GoogleAnalyticsTag = this.getAnalyticsTag();
  }

  static getAnalyticsTag = () => {
    let result = "UA-164774603-6";
    const host = window.location.hostname.toLocaleLowerCase();
    if (host.indexOf("chums.org") > -1) result = "UA-164774603-3"
    else if (host.indexOf("b1.church") > -1) result = "UA-164774603-10"
    else if (host.indexOf("streaminglive.church") > -1) result = "UA-164774603-1";
    return result;

  }

}

