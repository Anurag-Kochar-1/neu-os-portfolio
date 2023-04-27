export interface IFolderIcon {
  id?: number;
  folderName: string;
  folderIcon: string;
  folderLinkHref: string;
  onClick?: () => void;
  isOnClickDisabled?: boolean
  bgColor?: string;
}
