import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="font-sans text-center pt-7">
      <div className="text-3xl pb-3">Own Wall</div>

      <div className="max-w-[1360px] mx-auto">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">
                It is a web-based education platform designed to strengthen
                collaboration between students, teachers, and parents by
                centralizing academic activities, personal growth, and
                communication into a single system.
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/Home.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">
                The platform allows users to register as a parent, student, or
                teacher.
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/RegisterAsChild.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">
                Here is login screen as a child
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/Ready__To__Login.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">
                Creating a Profile - About
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/CS_AboutMe.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">
                Creating a Profile - Parents
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/CS_MyParents.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">
                Creating a Profile - Siblings
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/CS_siblings.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">
                Creating a Profile - Previous School
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/CS_PreviousSchool.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">
                Nutration. Every child must commit to following a personalized
                nutrition chart.
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/CS_Nutration.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">
                This is the student wall
              </div>
              <div className="flex  justify-center">
                <div className="w-5/6">
                  <Image
                    src="/MyWall__ForMe.png"
                    width={1140}
                    height={1127}
                    alt="Picture of the author"
                    className="object-contain"
                  />
                </div>
                <div className="w-1/6 p-4 text-left">
                  <div className="pb-3">
                    <span className="font-bold">Gallery - </span> where student
                    can post his/her photos
                  </div>
                  <div className="pb-3">
                    <span className="font-bold">
                      Posts from other students -
                    </span>
                    who need help in any subject
                  </div>
                  <div className="pb-3">
                    <span className="font-bold pb-3">If need help -</span>
                    he/she can create a post
                  </div>
                  <div className="pb-3">
                    <span className="font-bold pb-3">Think Tank-</span>A space
                    where students post questions and help each other learn.
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex gap-1"></div>
              <div className="w-[991px] mx-auto pb-4">
                Posts from other students requesting help in specific subjects.
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/myAssistanceList001.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">
                This is a wall that can be shared with anyone
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/ShareWall__ForAll.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">
                Tasks assigned by Teachers
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/assignedTask.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">Task Status</div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/TaskProgress.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">
                Spelling Practice Tests
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/wordsList.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">SpellingTest</div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/SpellingTest.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">RegisterAsParent</div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/RegisterAsParent.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">motherInfo</div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/motherInfo.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">emergencyContact</div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/emergencyContact.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">CarPoolingTab</div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/CarPoolingTab.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">
                availableForCarpooling__Request
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/availableForCarpooling__Request.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">
                needServicesForCarpooling
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/needServicesForCarpooling.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">TrackYourChild</div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/TrackYourChild.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="w-[991px] mx-auto pb-4">CarPooling</div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/CarPooling.png"
                  width={1140}
                  height={1127}
                  alt="Picture of the author"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
