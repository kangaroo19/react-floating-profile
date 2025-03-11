import { OrganizationIcon } from "@components";
import { OrgItem } from "@types";
import onNavigate from "@util/onNavigate";

interface OrganizationPropTypes {
  orgArr: OrgItem[];
}

export default function Organization({ orgArr }: OrganizationPropTypes) {
  console.log(orgArr);
  return (
    <div className="org-container">
      {orgArr.map((item) => (
        <OrganizationIcon
          avatar_url={item.avatar_url}
          onClickIcon={() => onNavigate(`https://github.com/${item.login}`)}
        />
      ))}
    </div>
  );
}
