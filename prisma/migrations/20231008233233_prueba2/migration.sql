/*
  Warnings:

  - You are about to drop the `_PermissionToProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProfileToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PermissionToProfile" DROP CONSTRAINT "_PermissionToProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_PermissionToProfile" DROP CONSTRAINT "_PermissionToProfile_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProfileToUser" DROP CONSTRAINT "_ProfileToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProfileToUser" DROP CONSTRAINT "_ProfileToUser_B_fkey";

-- DropTable
DROP TABLE "_PermissionToProfile";

-- DropTable
DROP TABLE "_ProfileToUser";

-- CreateTable
CREATE TABLE "_UserProfiles" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ProfilesPermissions" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserProfiles_AB_unique" ON "_UserProfiles"("A", "B");

-- CreateIndex
CREATE INDEX "_UserProfiles_B_index" ON "_UserProfiles"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProfilesPermissions_AB_unique" ON "_ProfilesPermissions"("A", "B");

-- CreateIndex
CREATE INDEX "_ProfilesPermissions_B_index" ON "_ProfilesPermissions"("B");

-- AddForeignKey
ALTER TABLE "_UserProfiles" ADD CONSTRAINT "_UserProfiles_A_fkey" FOREIGN KEY ("A") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserProfiles" ADD CONSTRAINT "_UserProfiles_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfilesPermissions" ADD CONSTRAINT "_ProfilesPermissions_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfilesPermissions" ADD CONSTRAINT "_ProfilesPermissions_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
