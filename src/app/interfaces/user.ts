export interface User {
    id: string,
    name: string,
    profilePicture: string,
}

export const dummyUser: User = {
    id: "dummy_user",
    name: "Dummy User",
    profilePicture: "/assets/placeholders/profile-picture.png",
};