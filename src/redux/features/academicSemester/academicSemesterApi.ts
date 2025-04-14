import { baseApi } from "../../api/baseAPi";


const academicSemester = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemester: builder.query({
          query: () => ({
            url: `/academic-semesters`,
            method: "GET"
          }),
        }),
      }),
})

export const {useGetAllSemesterQuery} = academicSemester