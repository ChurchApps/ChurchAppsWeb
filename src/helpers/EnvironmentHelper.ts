import { ApiHelper } from "../appBase/helpers";

export class EnvironmentHelper {
  private static AccessApi = "";
  private static MembershipApi = "";
  static AppUrl = "";
  static GoogleAnalyticsTag = "";

  static init = () => {
    switch (process.env.REACT_APP_STAGE) {
      case "staging": EnvironmentHelper.initStaging(); break;
      case "prod": EnvironmentHelper.initProd(); break;
      default: EnvironmentHelper.initDev(); break;
    }
    ApiHelper.apiConfigs = [
      { keyName: "AccessApi", url: EnvironmentHelper.AccessApi, jwt: "", permisssions: [] },
      { keyName: "MembershipApi", url: EnvironmentHelper.MembershipApi, jwt: "", permisssions: [] }
    ];
  }

  static initDev = () => {
    EnvironmentHelper.AccessApi = process.env.REACT_APP_ACCESS_API || "";
    EnvironmentHelper.MembershipApi = process.env.REACT_APP_MEMBERSHIP_API || "";
    EnvironmentHelper.GoogleAnalyticsTag = process.env.REACT_APP_GOOGLE_ANALYTICS || "";
    EnvironmentHelper.AppUrl = process.env.REACT_APP_ACCOUNTS_APP_URL || ""
  }

  //NOTE: None of these values are secret.
  static initStaging = () => {
    EnvironmentHelper.AccessApi = "https://accessapi.staging.churchapps.org";
    EnvironmentHelper.MembershipApi = "https://membershipapi.staging.churchapps.org";
    EnvironmentHelper.AppUrl = "https://accounts.staging.churchapps.org"
    EnvironmentHelper.GoogleAnalyticsTag = "";
  }

  //NOTE: None of these values are secret.
  static initProd = () => {
    EnvironmentHelper.AccessApi = "https://accessapi.churchapps.org";
    EnvironmentHelper.MembershipApi = "https://membershipapi.churchapps.org";
    EnvironmentHelper.AppUrl = "https://accounts.churchapps.org"
    EnvironmentHelper.GoogleAnalyticsTag = "UA-164774603-6";
  }

}

