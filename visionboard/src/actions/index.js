export const ADD_VISION = "ADD_VISION";

export function addVision(newVision) {
    return {
        type: ADD_VISION,
        payload: newVision
    }
}