import { OrganizationIcon } from "@components";
import { OrgItem } from "@types";
import { onNavigate } from "@util";

interface OrganizationPropTypes {
  orgArr: OrgItem[];
}

export default function Organization({ orgArr }: OrganizationPropTypes) {
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
