import { useEffect, useState } from "react";
import { Organization, PinnedRepo, ProfileHeader, ReadMe } from "./components";
import { ModalOption, OrgItem } from "@types";
import { getOrganizations, getUserReadme } from "@api";
import { CloseButton } from "@components";
import { useProfile } from "@context";

// SagathiyaJaydeep 얘처럼 이름이 없는경우도 있음

export default function FloatingModal({ userObj, pinnedRepoArr }: ModalOption) {
  const { isOpen } = useProfile();
  const [readme, setReadme] = useState("");
  const [orgArr, setOrgArr] = useState<OrgItem[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const readmeTemp = await getUserReadme(userObj.login);
      const orgTemp = await getOrganizations(userObj.organizations_url);
      setReadme(readmeTemp);
      setOrgArr(orgTemp);
    };
    fetchData();
  }, []);
  return (
    <>
      {isOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <CloseButton />
            <ProfileHeader userObj={userObj} />
            <Organization orgArr={orgArr} />
            <ReadMe content={readme} />
            <PinnedRepo pinnedRepoArr={pinnedRepoArr!} />
          </div>
        </div>
      )}
    </>
  );
}
