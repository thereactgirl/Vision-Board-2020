export const ADD_VISION = "ADD_VISION";

export function addVision(vision) {
    return {
        type: ADD_VISION,
        payload: vision
    }
}