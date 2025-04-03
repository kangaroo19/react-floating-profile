import { useEffect, useRef, useState } from "react";
import { Organization, PinnedRepo, ProfileHeader, ReadMe } from "./components";
import { ModalOption, OrgItem } from "@types";
import { getOrganizations, getUserReadme } from "@api";
import { useProfile } from "@context";
import { CloseButton } from "@components";

// SagathiyaJaydeep 얘처럼 이름이 없는경우도 있음

export default function FloatingModal({ userObj, pinnedRepoArr }: ModalOption) {
  const { isOpen, accessToken } = useProfile();
  const [readme, setReadme] = useState("");
  const [orgArr, setOrgArr] = useState<OrgItem[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const readmeTemp = await getUserReadme(userObj.login, accessToken!);
      const orgTemp = await getOrganizations(userObj.organizations_url, accessToken!);
      setReadme(readmeTemp);
      setOrgArr(orgTemp);
    };
    fetchData();
  }, []);

  const modalRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
  //       setIsOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`} ref={modalRef}>
      <div className="modal-container">
        <div className="modal-content">
          <CloseButton />
          <ProfileHeader userObj={userObj} />
          <Organization orgArr={orgArr} />
          <ReadMe content={readme} />
          <PinnedRepo pinnedRepoArr={pinnedRepoArr!} />
        </div>
      </div>
    </div>
  );
}
