import scala.sys.process.Process

name := """homepage"""
organization := "com.linkebon"

version := "1.0.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.4"

libraryDependencies += guice
libraryDependencies += ws

lazy val buildFrontends = taskKey[Unit]("Build frontends")

buildFrontends := {
  simpleTwitterApp.value
}

lazy val simpleTwitterApp = taskKey[Unit]("generate homepage")
simpleTwitterApp := {
  val frontendPath = baseDirectory.value.getPath + "/frontend/app"
  Process(s"npm run generateFrontend --prefix $frontendPath").!
}