(*  MIT License

    Copyright (c) 2023 funkywork

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE. *)

(** [Nightmare_js] provides an API for working with the web browser (via
    [Js_of_ocaml]) and tries to provide bindings missing from the standard
    [Js_of_ocaml] library. *)

(** {1 Types}

    Some common type aliases to simplify function signatures. *)

(**/**)

module Aliases = Aliases

(**/**)

include module type of Aliases (** @inline *)

(** {2 Modules types} *)

module Bindings = Bindings
module Interfaces = Interfaces

(** {2 Optional values} *)

module Optional = Optional
module Option = Optional.Option
module Nullable = Optional.Nullable
module Undefinable = Optional.Undefinable

(** {2 Web Storage API} *)

module Storage = Storage

(** {1 Utils} *)

module Console = Console
