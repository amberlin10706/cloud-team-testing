import { Permission } from "./types/Permission";

// 有規則型：得保證children都是繼承parent的code
export function findLabel(permissions: Permission[], code: string): string {
    const findItem = (newPermissions: Permission[] = permissions) => {
        const item = newPermissions.find((it) => code.startsWith(it.code))
        if (!item) {
            return null
        }
        if (item.code === code) {
            return item.label
        } else {
            return findItem(item.children)
        }
    }

    return findItem()
}


// 土法煉鋼: 每個都跑
export function findLabelOnEvery(permissions: Permission[], code: string): string {
    let ans = null;
    const findItem = (newPermissions: Permission[] = permissions): boolean => {
        return newPermissions.some((it) => {
            if (it.code === code) {
                ans = it.label
                return true
            }

            if (it.children.length > 0) {
                return findItem(it.children)
            }

            return false
        })
    }

    findItem()

    return ans
}
