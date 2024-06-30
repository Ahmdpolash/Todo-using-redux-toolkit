import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }

        return {
          // url: `tasks?priority=${priority}`,   // old version
          url: "tasks",
          method: "GET",
          // params: { priority },   // old version
          params: params, // professional
        };
      },
      providesTags: ["todo"],
    }),

    addTodos: builder.mutation({
      query: (data) => ({
        url: "tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),

    updateTodo: builder.mutation({
      query: (options) => {
        console.log("inside api", options);
        return {
          url: `/task/${options.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["todo"],
    }),

    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/task/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodosMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = baseApi;
