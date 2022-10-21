import { mockPermissions } from "../dummies/mockPermissions";
import { findLabel, findLabelOnEvery } from "../src/findLabel";

describe("findLabel spec", () => {
    it("should find proper", () => {
        expect(findLabel(mockPermissions, "code B-1-1")).toBe("label B-1-1")
        expect(findLabel(mockPermissions, "code B-1")).toBe("label B-1")
        expect(findLabel(mockPermissions, "code C")).toBe("label C")
        expect(findLabel(mockPermissions, "code D")).toBe(null)
    });

    it("should find proper", () => {
        expect(findLabelOnEvery(mockPermissions, "code B-1-1")).toBe("label B-1-1")
        expect(findLabelOnEvery(mockPermissions, "code B-1")).toBe("label B-1")
        expect(findLabelOnEvery(mockPermissions, "code C")).toBe("label C")
        expect(findLabelOnEvery(mockPermissions, "code D")).toBe(null)
    });
});

