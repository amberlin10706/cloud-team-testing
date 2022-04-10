import { Permission } from "./types/Permission";

export function findLabel(permissions: Permission[], code: string): string {
    let label: string = null
    permissions
        .find((p) => {
            if (p.code === code) {
                label = p.label;
                return true;
            }
            if (p.children.length > 0) {
                const ans = findLabel(p.children, code);
                label = ans;
                return !!ans;
            }
            return false;
        });
    return label
}
