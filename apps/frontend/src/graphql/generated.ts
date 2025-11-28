import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CreateStudentInput = {
  age: Scalars['Int']['input'];
  enrollmentDate: Scalars['DateTime']['input'];
  gender: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createStudent: Student;
  deleteStudent: Student;
  updateStudent: Student;
};


export type MutationCreateStudentArgs = {
  input: CreateStudentInput;
};


export type MutationDeleteStudentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateStudentArgs = {
  id: Scalars['ID']['input'];
  input: UpdateStudentInput;
};

export type Query = {
  __typename?: 'Query';
  student?: Maybe<Student>;
  students: Array<Student>;
};


export type QueryStudentArgs = {
  id: Scalars['ID']['input'];
};

export type Student = {
  __typename?: 'Student';
  age: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  enrollmentDate: Scalars['DateTime']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateStudentInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  enrollmentDate?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GetStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentsQuery = { __typename?: 'Query', students: Array<{ __typename?: 'Student', id: string, name: string, age: number, gender: string, enrollmentDate: any, createdAt: any, updatedAt: any }> };

export type GetStudentQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetStudentQuery = { __typename?: 'Query', student?: { __typename?: 'Student', id: string, name: string, age: number, gender: string, enrollmentDate: any } | null };

export type CreateStudentMutationVariables = Exact<{
  input: CreateStudentInput;
}>;


export type CreateStudentMutation = { __typename?: 'Mutation', createStudent: { __typename?: 'Student', id: string, name: string, age: number, gender: string, enrollmentDate: any } };

export type UpdateStudentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateStudentInput;
}>;


export type UpdateStudentMutation = { __typename?: 'Mutation', updateStudent: { __typename?: 'Student', id: string, name: string, age: number, gender: string, enrollmentDate: any } };

export type DeleteStudentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteStudentMutation = { __typename?: 'Mutation', deleteStudent: { __typename?: 'Student', id: string } };


export const GetStudentsDocument = gql`
    query GetStudents {
  students {
    id
    name
    age
    gender
    enrollmentDate
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetStudentsQuery__
 *
 * To run a query within a Vue component, call `useGetStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetStudentsQuery();
 */
export function useGetStudentsQuery(options: VueApolloComposable.UseQueryOptions<GetStudentsQuery, GetStudentsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetStudentsQuery, GetStudentsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetStudentsQuery, GetStudentsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, {}, options);
}
export function useGetStudentsLazyQuery(options: VueApolloComposable.UseQueryOptions<GetStudentsQuery, GetStudentsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetStudentsQuery, GetStudentsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetStudentsQuery, GetStudentsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, {}, options);
}
export type GetStudentsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetStudentsQuery, GetStudentsQueryVariables>;
export const GetStudentDocument = gql`
    query GetStudent($id: ID!) {
  student(id: $id) {
    id
    name
    age
    gender
    enrollmentDate
  }
}
    `;

/**
 * __useGetStudentQuery__
 *
 * To run a query within a Vue component, call `useGetStudentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetStudentQuery({
 *   id: // value for 'id'
 * });
 */
export function useGetStudentQuery(variables: GetStudentQueryVariables | VueCompositionApi.Ref<GetStudentQueryVariables> | ReactiveFunction<GetStudentQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetStudentQuery, GetStudentQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetStudentQuery, GetStudentQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetStudentQuery, GetStudentQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetStudentQuery, GetStudentQueryVariables>(GetStudentDocument, variables, options);
}
export function useGetStudentLazyQuery(variables: GetStudentQueryVariables | VueCompositionApi.Ref<GetStudentQueryVariables> | ReactiveFunction<GetStudentQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetStudentQuery, GetStudentQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetStudentQuery, GetStudentQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetStudentQuery, GetStudentQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetStudentQuery, GetStudentQueryVariables>(GetStudentDocument, variables, options);
}
export type GetStudentQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetStudentQuery, GetStudentQueryVariables>;
export const CreateStudentDocument = gql`
    mutation CreateStudent($input: CreateStudentInput!) {
  createStudent(input: $input) {
    id
    name
    age
    gender
    enrollmentDate
  }
}
    `;

/**
 * __useCreateStudentMutation__
 *
 * To run a mutation, you first call `useCreateStudentMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateStudentMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateStudentMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateStudentMutation(options: VueApolloComposable.UseMutationOptions<CreateStudentMutation, CreateStudentMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateStudentMutation, CreateStudentMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateStudentMutation, CreateStudentMutationVariables>(CreateStudentDocument, options);
}
export type CreateStudentMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateStudentMutation, CreateStudentMutationVariables>;
export const UpdateStudentDocument = gql`
    mutation UpdateStudent($id: ID!, $input: UpdateStudentInput!) {
  updateStudent(id: $id, input: $input) {
    id
    name
    age
    gender
    enrollmentDate
  }
}
    `;

/**
 * __useUpdateStudentMutation__
 *
 * To run a mutation, you first call `useUpdateStudentMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateStudentMutation({
 *   variables: {
 *     id: // value for 'id'
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateStudentMutation(options: VueApolloComposable.UseMutationOptions<UpdateStudentMutation, UpdateStudentMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateStudentMutation, UpdateStudentMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateStudentMutation, UpdateStudentMutationVariables>(UpdateStudentDocument, options);
}
export type UpdateStudentMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateStudentMutation, UpdateStudentMutationVariables>;
export const DeleteStudentDocument = gql`
    mutation DeleteStudent($id: ID!) {
  deleteStudent(id: $id) {
    id
  }
}
    `;

/**
 * __useDeleteStudentMutation__
 *
 * To run a mutation, you first call `useDeleteStudentMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStudentMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteStudentMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStudentMutation(options: VueApolloComposable.UseMutationOptions<DeleteStudentMutation, DeleteStudentMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteStudentMutation, DeleteStudentMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<DeleteStudentMutation, DeleteStudentMutationVariables>(DeleteStudentDocument, options);
}
export type DeleteStudentMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteStudentMutation, DeleteStudentMutationVariables>;