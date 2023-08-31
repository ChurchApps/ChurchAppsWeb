import React from "react";
import { GitHubIssue } from "../../helpers";
import { Typography } from "@mui/material";
import { useMountedState } from "@churchapps/apphelper";

interface Props { labels: string[] }

export const GitHubIssues: React.FC<Props> = (props) => {
  const [issues, setIssues] = React.useState<GitHubIssue[]>([]);
  const isMounted = useMountedState();

  const getAnonymous = async (url: string) => {
    try {
      const requestOptions = { method: "GET" };
      return fetch(url, requestOptions).then(response => response.json())
    } catch (e) {
      throw (e);
    }
  }

  const loadData = React.useCallback(() => {
    const promises: Promise<any>[] = [];
    props.labels.forEach(label => {
      const url = "https://api.github.com/repos/LiveChurchSolutions/ChurchAppsSupport/issues?state=open&label=" + label;
      promises.push(getAnonymous(url))
    });
    Promise.all(promises).then((responses: any[]) => {
      const result: GitHubIssue[] = [];
      responses.forEach((resp: any[]) => {
        try {
          resp.forEach((item: any) => {
            result.push({
              repoName: item.repository_url.replace("https://api.github.com/repos/LiveChurchSolutions/", ""),
              title: item.title,
              url: item.html_url,
              number: item.number
            });
          });
        } catch {
          //rate limit
        }
      });
      if(isMounted()) {
        setIssues(result);
      }
    });
  }, [props.labels, isMounted]);

  const getItems = () => {
    const result: JSX.Element[] = [];
    issues.forEach((issue, i) => {
      result.push(<tr key={i}>
        <td>{issue.repoName}</td>
        <td><a href={issue.url}>{issue.title}</a></td>
      </tr>);

    });
    return <>{result}</>
  }

  React.useEffect(loadData, [props.labels, loadData]);

  if (issues.length === 0) return <></>;
  else {
    return (
      <>
        <Typography sx={{fontSize: "28px", fontWeight: 500, margin: 0}} component="h4">Open Issues</Typography>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Repository</th>
              <th>Issue</th>
            </tr>
          </thead>
          <tbody>
            {getItems()}
          </tbody>
        </table>
      </>
    )
  }

}
