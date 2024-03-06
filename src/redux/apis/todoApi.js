import baseApi from "../baseApi";

const todoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTodo: builder.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Todo"],
    }),
    updateTask: builder.mutation({
      query: ({ taskId, data }) => ({
        url: `/task/update/${taskId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Todo"],
    }),
    deleteTask: builder.mutation({
      query: ({ taskId }) => ({
        url: `/task/delete/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
    getMe: builder.query({
      query: (token) => ({
        url: `/auth/me`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Auth"],
    }),
    getAllTodo: builder.query({
      query: ({ token }) => ({
        url: `/task/all`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Todo"],
    }),
  }),
});

export const {
  useCreateTodoMutation,
  useGetAllTodoQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = todoApi;
