export const Api = {
    baseUrl: "http://localhost:3000",

    readAllUrl: () => Api.baseUrl + "/product",

    readByIdUrl: id => Api.baseUrl + "/product/" + id,
    
    createProductUrl: () => Api.baseUrl + "/product",

    updateUrl: id => Api.baseUrl + "/product/" + id,

    deleteUrl: id => Api.baseUrl + "/product/" + id,


    buildApiGetRequest: url =>
        fetch(url, {
            method: "GET",
        }),

    buildApiPostRequest: (url, body) =>
        fetch(url, {
            method: "POST",
            headers: new Headers({
                "content-type": "application/json"
            }),
            body: JSON.stringify(body),
        }),

    // PATCH
    buildApiPatchRequest: (url, body) =>
        fetch(url, {
            method: "PATCH",
            headers: new Headers({
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body),
        }),

        // DELETE
    buildApiDeleteRequest: url =>
        fetch(url, {
        method: "DELETE",
    }),
};