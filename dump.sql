--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Ubuntu 14.8-1.pgdg22.04+1)
-- Dumped by pg_dump version 14.8 (Ubuntu 14.8-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    active boolean DEFAULT true NOT NULL,
    "IdUser" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "IdUser" integer NOT NULL,
    "Count" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    name text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, '63855fb9-e31d-45e4-97d3-c42232150f13', true, 16, '2023-05-25 19:07:42.16897');
INSERT INTO public.sessions VALUES (2, '45b3cd07-fa9a-4e45-be7b-5bc5d98a0fda', true, 16, '2023-05-25 20:16:51.118202');
INSERT INTO public.sessions VALUES (3, '39c3009c-15d2-4d2e-8a5d-e9c4a69a4213', true, 16, '2023-05-25 20:20:34.472935');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'email@example.com', '$2b$10$NQjq1/Macysgn4h3zhPace/.wvfIfairjrtXZfWepBT2hJkwd/gSC', 'nome de usuário', '2023-05-25 18:00:51.119495');
INSERT INTO public.users VALUES (3, 'em23432ail@example.com', '$2b$10$HGb1e6HwZr8yxal5cHp0euGsN4M0rFdGhtnC1lWf3hHqu7hXjDgBG', 'no23432me de usuário', '2023-05-25 18:40:47.678959');
INSERT INTO public.users VALUES (5, 'em234dsfgdgd32ail@example.com', '$2b$10$7Vp5zupbY1u/6oN8s17PIeR9GpKf5O3GYjoOcpKu5SK82I7UZlU3S', 'noasdasdsame de usuário', '2023-05-25 18:41:21.167943');
INSERT INTO public.users VALUES (9, 'emasdfsdafd32ail@example.com', '$2b$10$0dhdIfmXxNkqCwuUE/jXOe6Z3NvSmOt3rwzXGyLNiWqhCMj4uJOm6', 'noasdaadsfsdsame de usuário', '2023-05-25 18:42:21.591805');
INSERT INTO public.users VALUES (12, 'emasdil@example.com', '$2b$10$/7SZBoZG4Ge/UNbkx3VNcO7/H6Rx7/Xtj3qe..oOgFjuvCYqFNlKy', 'noasda usuário', '2023-05-25 18:52:49.717589');
INSERT INTO public.users VALUES (16, 'emadssdil@example.com', '$2b$10$SVlCesxp3yer7Wxn0.zKU.UbfaiMJFBj03ZOD945aAsxYT6.2gWA6', 'noaasdsda usuário', '2023-05-25 18:54:26.649459');
INSERT INTO public.users VALUES (19, 'emadssl@example.com', '$2b$10$Cm35dMi3w3IYz0LTzi2x2O2vGfsXKBeuOm7xuXhMQ86FvkLfK375y', 'noaasda usuário', '2023-05-25 19:05:48.861109');
INSERT INTO public.users VALUES (21, 'emasdfdssl@example.com', '$2b$10$yBHr1yZ7Yol/eZe5bGBv2.ONzvdb9coIjRJllsYF9SppRRIkyCyq.', 'noaasdfsda usuário', '2023-05-25 19:07:55.794508');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 3, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 23, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_IdUser_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_IdUser_fkey" FOREIGN KEY ("IdUser") REFERENCES public.users(id);


--
-- Name: urls urls_IdUser_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_IdUser_fkey" FOREIGN KEY ("IdUser") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

